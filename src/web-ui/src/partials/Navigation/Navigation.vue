<template>
  <nav class="navigation fixed-top pt-2 pb-3 p-lg-1">
    <div class="nav-contents container d-lg-flex align-items-center">
      <HomeLink class="logo"></HomeLink>
      <ShopDropdown class="shop mx-lg-2"></ShopDropdown>
      <Search class="search mx-lg-4"></Search>
      <Search2 class="search2 mx-lg-4"></Search2>
      <Search3 class="search3 mx-lg-4"></Search3>
      <UserDropdown class="user-dropdown"></UserDropdown>
      <NavSeparator class="d-none d-lg-block mx-2"></NavSeparator>
      <SupportLink class="support"></SupportLink>
      <NavSeparator class="sep-2 mx-2"></NavSeparator>
      <CartLink class="cart"></CartLink>
    </div>
  </nav>
</template>

<script>
import HomeLink from './HomeLink/HomeLink';
import ShopDropdown from './ShopDropdown/ShopDropdown';
import Search from './Search/Search';
import Search2 from './Search/Search2';
import Search3 from './Search/Search3';
import SupportLink from './SupportLink/SupportLink';
import NavSeparator from './NavSeparator/NavSeparator';
import CartLink from './CartLink/CartLink';
import UserDropdown from './UserDropdown/UserDropdown';

export default {
  name: 'Navigation',
  components: {
    HomeLink,
    ShopDropdown,
    Search,
    Search2,
    Search3,	  
    SupportLink,
    NavSeparator,
    CartLink,
    UserDropdown,
  },
};
</script>

<style scoped>
.navigation {
  background: var(--white);
  border-bottom: 1px solid var(--grey-500);
  box-shadow: 6px 2px 6px var(--grey-200);
}

.logo {
  grid-area: Logo;
  width: 80px;
}

.shop {
  grid-area: Shop;
}

.search {
  grid-area: Search;
  justify-self: end;
}

.search2 {
  grid-area: Search2;
  justify-self: end;
}

.search3 { 
  grid-area: Search3;
  justify-self: end;
}

.user-dropdown {
  grid-area: UserDropdown;
  justify-self: start;
  /* max-width: 250px; */
}

.support {
  grid-area: Support;
}

.sep-2 {
  grid-area: Sep2;
  justify-self: end;
}

.cart {
  grid-area: Cart;
  justify-self: end;
}

.nav-contents {
  display: grid;
  grid-template-columns: repeat(2, auto) auto 1fr auto repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 10px;
  /* let second row components take more space if they need to */
  grid-template-areas:
    'Shop Logo . . . Support Sep2 Cart'
    'UserDropdown UserDropdown UserDropdown . Search Search Search Search';
}

@media (min-width: 992px) {
  .logo {
    width: 120px;
  }

  .search {
    flex: 1;
  }

  .search2 {
    flex: 1;
  }

  .search3 {
    flex: 1;
  }

}
</style>
