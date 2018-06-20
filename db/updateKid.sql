UPDATE chores_list
set chore_holder = $2
where id = $1;
select * from chores_list;