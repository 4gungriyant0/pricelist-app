import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import ArmadaLogo from "./../../assets/logo/Logo_blue.png";
// import ALogo from "./../../assets/logo/favicon/favicon.png";

const HeaderComponent = () => {
  return (
    <>
      <Navbar maxWidth="xl" isBordered>
        <NavbarContent justify="start" className="w-3/12">
          <NavbarBrand>
            <img
              src={ArmadaLogo}
              alt="ArmadaLogo"
              style={{ width: "90px" }}
              // className="hidden md:block"
            />
            {/* <img
              src={ALogo}
              alt="ALogo"
              style={{ width: "30px" }}
              className="sm:hidden"
            /> */}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          as="div"
          justify="center"
          className="items-center w-8/12"
        >
          <Input
            classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarContent>

        {/* <NavbarContent className="sm:hidden w-1/12" justify="end">
          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </NavbarContent> */}

        {/* <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu>
          <div>filter</div>
        </NavbarMenu> */}
      </Navbar>
    </>
  );
};

export default HeaderComponent;
