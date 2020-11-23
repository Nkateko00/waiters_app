create table Weekdays(
    id serial not null primary key,
    weekdays text not null
);
create table Waiters
(
    id serial not null primary key,
    waiters text not null

);

create table Timesheet(

    id serial not null primary key,
    weekdays_days int,
    waiters_id int,
    foreign key (waiters_id) references waiters(id),
     foreign key (weekdays_days) references weekdays(id)
);

insert into Weekdays (weekdays) values ('Monday');
insert into Weekdays (weekdays) values ('Tuesday');
insert into Weekdays (weekdays) values ('Wednesday');
insert into Weekdays (weekdays) values ('Thursday');
insert into Weekdays (weekdays) values ('Friday');
insert into Weekdays (weekdays) values ('Saturday');
insert into Weekdays (weekdays) values ('Sunday');

