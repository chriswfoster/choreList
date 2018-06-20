UPDATE chores_list
set chore_holder = (null)
where id = $1;
select * from chores_list;