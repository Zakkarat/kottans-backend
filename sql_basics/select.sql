select first_name, last_name, count(`order`.id) as total_orders, sum(quantity) as total_items_bought, sum(order_item.quantity * item.price) - sum(order_item.discount) as total_money_spent
   from person 
   left join `order` on person.id = person_id
   left join order_item on `order`.id = order_id
   left join item on item_id = item.id
   group by person.id order by last_name desc;