import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
type CartITemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartITemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack className="d-flex align-items-center" direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="muted-text" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
