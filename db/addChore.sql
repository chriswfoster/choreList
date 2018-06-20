INSERT INTO chores_list
    (chore_name, point_value, date_created)
VALUES($1, $2, now());
select * from chores_list;