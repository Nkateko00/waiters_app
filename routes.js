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
    async function reset(req, res) {
        req.flash('success', 'Ophelia Waiters List has been reset');
        await waiter.clear();
        res.render('home', {

        });
    }


    return {

        allWaiters,
        home,
        reset
    }
}