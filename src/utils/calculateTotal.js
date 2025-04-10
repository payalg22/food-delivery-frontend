export default function calculateTotal(cart) {
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    return total;
}