AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Cannot read property 'adminRoles' of undefined
        at app.use (/opt/bigdata-web/server/index.js:46:20)
        at /opt/bigdata-web/server/service/serverAdmin/handler.js:290:60
        at tryCatcher (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/util.js:16:23)
        at Promise._settlePromiseFromHandler (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/promise.js:547:31)
        at Promise._settlePromise (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/promise.js:604:18)
        at Promise._settlePromise0 (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/promise.js:649:10)
        at Promise._settlePromises (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/promise.js:729:18)
        at _drainQueueStep (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/async.js:93:12)
        at _drainQueue (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/async.js:86:9)
        at Async._drainQueues (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/async.js:102:5)
        at Immediate.Async.drainQueues [as _onImmediate] (/opt/bigdata-web/node_modules/_bluebird@3.7.2@bluebird/js/release/async.js:15:14)
        at processImmediate (timers.js:632:19)