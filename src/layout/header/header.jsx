import { Fragment } from "react";
import Nav from "../../common/navs/nav";
import Logo from "../../common/logo/logo";
import TopBar from "./topbar";
import PrimaryButton from "../../common/buttons/primaryButton"
import { Link } from "react-router-dom";
import { scrollToTop } from "../../functionsUI";
import BurgerMenu from "../../common/navs/burgerMenu";

const Header = () => {


    return (
        <Fragment>
            <TopBar />

            <div className="flex flex-col items-center justify-center sticky top-0 bg-white z-[999999999] 
            shadow-header-shadow">

                <div className="w-[90%] py-[10px] flex items-center justify-between  ">
                    <div className="flex items-center gap-12">
                        <div className="w-[200px]">
                            <Logo scrollUp={scrollToTop} />
                        </div>
                        <div className="hidden md:flex">
                            <Nav flex={true} scrollUp={scrollToTop} />

                        </div>

                    </div>

                    <div>
                        <BurgerMenu />

                    </div>
                    <div className="hidden md:flex gap-8 items-center">

                        <Link to="/services/4" onClick={() => scrollToTop()} >
                            <PrimaryButton textBtn="Hacer una Cotización" />
                        </Link>


                    </div>

                </div>
            </div>
        </Fragment>
    )
}



export default Header;