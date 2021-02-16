'use strict'

const Job = use('Job')

class SendBirthdayEmail extends Job {
  
    constructor(){
      super(arguments)
      
      this.timeOut = 2000; // seconds: time out for queue
      this.retryCount = 0; // number of times to retry
      this.retryUntil = 200; // seconds: retry
      this.delayUntil = 0; // seconds: delay
    }

    get queue () {
        return 'high'
    }

	async handle(link, done) {
		// ...
		console.log(`Job [${this.constructor.name}] - handler called: status=running; id=${this.id} `)
    }

    progress(progress) {
        // ...
        console.log(`Job [${this.constructor.name}] - progress:${progress}%: status=running; id=${this.id} `)
    }
  
    failed(error) {
        // ...
		console.log(`Job [${this.constructor.name}] - status:failed; id=${this.id} `, error.message)
	}
	
	retrying(error){
        // ...
		console.log(`Job [${this.constructor.name}] - status:retrying; id=${this.id} `, error.message)
	}

    succeeded(result){
        // ...
        console.log(`Job [${this.constructor.name}] - status:succeeded; id=${this.id} `, result)
    }
}

module.exports = SendBirthdayEmail