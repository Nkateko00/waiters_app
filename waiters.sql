create table Weekdays(
    id serial not null primary key,
    weekdays text not null,
);
create table Waiters
(
    id serial not null primary key,
    waiters text not null,

);

create table Timesheet(

    weekdays_days text not null,
    waiters_name text not null,
);

insert into Weekdays (weekdsays) values ('Monday');
insert into Weekdays (weekdsays) values ('Tuesday');
insert into Weekdays (weekdsays) values ('Wednesday');
insert into Weekdays (weekdsays) values ('Thursday');
insert into Weekdays (weekdsays) values ('Friday');
insert into Weekdays (weekdsays) values ('Saturday');
insert into Weekdays (weekdsays) values ('Sunday');