import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";

const HeaderComponent = () => {
  return (
    <>
      <Navbar maxWidth="xl" isBordered>
        <NavbarContent justify="start" className="w-2/12">
          <NavbarBrand>
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          as="div"
          justify="center"
          className="items-center w-9/12"
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
