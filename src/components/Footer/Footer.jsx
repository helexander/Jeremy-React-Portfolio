import { Container, Navbar } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ marginTop: "30px" }}>
                <Container className={`justify-content-center ${styles.footer}`}>
                    &copy; Jeremy Chee {new Date().getFullYear()}
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer
