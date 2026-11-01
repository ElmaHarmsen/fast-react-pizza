import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Render-as-you-fetch strategy (not fetch-on-render, that creates waterfalls)
// Could be placed anywhere - because data fetching logic is placed inside the router, not in the component
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
