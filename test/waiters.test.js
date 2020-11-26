let assert = require('assert')
let waiters = require('../waiters')


const pg = require("pg");
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://teko:teko123@localhost:5432/waiters_shift';
const pool = new Pool({
    connectionString
});

var waiter = waiters(pool);

describe('Waiters Function',function(){

    beforeEach(async function () {
        await pool.query(`delete from registration`)
       
    });

it("should reset the dataBase", async function () {

    await waiter.addNames('Themba');
    await waiter.addNames('Teko');
    const allWaiters = await reg.allWaiters();

    assert.deepEqual([], await waiter.clear());
});
it("should add waiters Names onto database",async function(){

    
    await waiter.addNames('Themba');
    await waiter.addNames('Teko');
    await waiter.addNames('Shane');
    await waiter.addNames('Kagiso');

    assert.deepEqual([{waiters : 'Themba'}],[{waiters : 'Teko'}], 
    [{waiters : 'Shane'}],[{waiters : 'Kagiso'}],await waiter.allWaiters());

});
it('should not add duplicate names onto the database',async function(){

    await waiter.addNames('Teko');
    await waiter.addNames('Teko');
    await waiter.addNames('Mihlali');
    await waiter.addNames('Mihlali');
    assert.deepEqual([{waiters : 'Teko'},{ waiters : 'Mihlali'}],await waiter.allWaiters());

});
it('should return all the Weekdays',async function(){

    await waiter.('Monday');
    await waiter.('Tuesday');
    await waiter.('Wednesday');
    await waiter.('Thursday');
    await waiter.('Friday');
    await waiter.('Saturday');
    await waiter.('Sunday');

    assert.deepEqual([{ weekdays : 'Monday'},{weekdays : 'Tuesday'},,{weekdays : 'Wednesday'},,{weekdays : 'Thursday'}
    ,{weekdays : 'Friday'},{weekdays : 'Saturday'},{weekdays : 'Sunday'}],await waiter.getWeekdays());
})

});
after(function () {
    pool.end();
});

