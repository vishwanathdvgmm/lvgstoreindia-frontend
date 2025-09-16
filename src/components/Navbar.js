export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">LVGStoreIndia</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/products" className="hover:text-blue-500">Products</a>
        <a href="/cart" className="hover:text-blue-500">Cart</a>
        <a href="/login" className="hover:text-blue-500">Login</a>
      </div>
    </nav>
  );
}
