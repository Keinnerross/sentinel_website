import { Fragment } from "react";
import Nav from "../../layout/nav";
import Logo from "../logo/logo";
import TopBar from "./topbar";
import PrimaryButton from "../../common/buttons/primaryButton"
import { Link } from "react-router-dom";
import { scrollToTop } from "../../functionsUI";

const Header = () => {


    return (
        <Fragment>
            <TopBar />

            <div className="flex flex-col items-center justify-center sticky top-0 bg-white z-[999999999] 
            shadow-header-shadow">

                <div className="w-[90%] py-[13px] flex items-center justify-between  ">
                    <div className="flex items-center gap-12">
                        <div className="w-[200px]">
                            <Logo scrollUp={scrollToTop} />
                        </div>
                        <Nav flex={true} scrollUp={scrollToTop} />
                    </div>
                    <div className="flex gap-8 items-center">
                        {/* <Link to="/services/4" onClick={() => scrollToTop()} >
                            <p>Contáctar a Ventas</p>
                        </Link> */}
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