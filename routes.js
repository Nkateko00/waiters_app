module.exports = function waitersAvailabitiy(waiter) {

    async function home(req, res) {

        var getName = await reg.addName()
        res.render('home', {
           
        });
    }

    async function allWaiters(req, res) {
        var waiters = req.body('user');
        
      

        res.render('/waiters:/username');
        //     if(waiters === ""){
        //         req.flash('please enter your name');

                 
        //     else{

        //         await waiter.allWaiters(waiters);
        //     }
        // }
    
    }
    async function reset(req, res) {
        await waiter.clear();
        req.flash('success', 'Ophelia Waiters List has been reset');
        res.render('home', {

        });
    }


    return {

        allWaiters,
        home,
        reset
    }
}