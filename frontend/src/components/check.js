<div className="navbar">
<div className="links">
  <ul className="nav-ul">
    <Link to="/"> Shop </Link>
    <Link to="/contact"> Contact </Link>
    <Link to="/cart">
      <ShoppingCart size={32} />
    </Link>
    {auth ? (
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link onClick={logout} to="/signup">
            Logout ({JSON.parse(auth).name})
          </Link>
        </li>
      </ul>
    ) : (
      <ul className="nav-ul nav-right">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    )}
  </ul>
</div>
</div>
);
};
