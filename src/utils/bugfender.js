import { Bugfender } from '@bugfender/sdk'
const isBrowser = typeof window !== "undefined"

const GatsbyBugfender = {
    init: () => {
        if (!isBrowser) {
            return
        }
        Bugfender.init({
            appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
        })
    },

    log: (...messages) => {
        if (!isBrowser) {
            return
        }
        Bugfender.log(messages.join( ))
    },

    warn: (...messages) => {
        if (!isBrowser) {
            return
        }
        Bugfender.warn(messages.join( ))
    },

    error: (...messages) => {
        if (!isBrowser) {
            return
        }
        Bugfender.error(messages.join( ))
    },

    sendUserFeedback: (key, value) => {
        if (!isBrowser) {
            return
        }
        Bugfender.sendUserFeedback(key, value)
    },

    sendIssue: (key, value) => {
        if (!isBrowser) {
            return
        }
        Bugfender.sendIssue(key, value)
    },

    sendCrash: (key, value) => {
        if (!isBrowser) {
            return
        }
        Bugfender.sendCrash(key, value)
    }

}

export default GatsbyBugfender;



