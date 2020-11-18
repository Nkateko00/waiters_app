module.exports = function (pool) {

    async function addName(name){
        if(!name == ""){
            var specialCase = /[^A-Za-z]/g;
            var noNumbers = name.replace(specialCase,"");
            var nameEntered = noNumbers.charAt(0).toUpperCase() + noNumber.slice(1).toLowerCase();

            const verified = await pool.query(`select id from Waiters where waiters = $1`,[nameEntered])

        }

    }
    async function clear(){
        const remove = await pool.query(`delete from Timesheet`);
        return remove.rows();

    }
    return {
        clear,
        addName
    }
 }