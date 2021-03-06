module.exports = function (pool) {

    async function addName(name) {
        if (!name == "") {
            var specialCase = /[^A-Za-z]/g;
            var noNumbers = name.replace(specialCase, "");
            var nameEntered = noNumbers.charAt(0).toUpperCase() + noNumber.slice(1).toLowerCase();

            const verified = await pool.query(`select id from Waiters where waiters = $1`, [nameEntered])

            if (verified.rowCount === 0) {

                await pool.query(`insert into Waiters waiters values ($1)`, [nameEntered]);
                return 'Name Entered!'
            }
            return 'Name was already entered'
        }
    }
    async function getWorkingDays(days, name) {
        //get Name Id & Insert A shift In the Timesheet DB table
        //Use the Addname Function to get waiter Id

        var insertName = await addName(name);
        // console.log = undefined
        if (days !== undefined) {
            const getName = await pool.query(`select id from Waiters where name = $1`, [insertName]);
            var nameID = getName.rows[0].id

            await pool.query(`delete from Timesheet where waiters_name = $`, [name]);

            for (var i = 0; i < days.length; i++) {
                //console.log returns an array
                await pool.query(`insert into Timesheet where (weekdays_days,waiters_id) values ($1, $2)`, [days[i], nameID])
            }

        }
        else {
            return false
            //will prevent submit from running
        }

}
async function getTimesheets(days,names){

    const allName = await addName(names);
    


}

async function getWeekdays() {
    //return all weekdays

    const allWeekdays = await pool.query(`select weekdays from Weekdays`);
    return allWeekdays.rows;

}

async function getWaiters() {
    // return all the waiters
    const allWaiters = await pool.query(`select waiters from Waiters`);
    return allWaiters.rows;
}

async function clear() {
    // clear database
    const remove = await pool.query(`delete from Timesheet`);
    return remove.rows;

}
return {
    clear,
    addName,
    getWaiters,
    getWeekdays,
    getWorkingDays,
    getTimesheets

}
}