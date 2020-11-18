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
    async function addWeekdays(){
        
    }
    async function getWeekdays() {

        const allWeekdays = await pool.query(`select weekdays from Weekdays`);
        return allWeekdays.rows;

    }

    async function allWaiters() {
        const allWaiters = await pool.query(`select waiters from Waiters`);
        return allWaiters.rows;
    }

    async function clear() {
        const remove = await pool.query(`delete from Timesheet`);
        return remove.rows();

    }
    return {
        clear,
        addName,
        allWaiters,
        getWeekdays,
        addWeekdays

    }
}