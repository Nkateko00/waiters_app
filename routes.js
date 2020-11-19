module.exports = function waitersAvailabitiy(waiter) {

      async function home(req, res) {

        var getName = await reg.addName()
        res.render('home', {
            // handlebars : getName
        });
    }

    async function allWaiters(req, res) {
        var allWaiters = await waiter.allWaiters();

        res.render('/waiters:/username', {

            //   handlebars  : allWaiters;

        });
    }

    
    return {

        allWaiters,
        home
    }
}