import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Menu fixed="top" size="huge">
            <Menu.Menu position="right">
                <Menu.Item as={Link} to="/auth">AUTH</Menu.Item>
            </Menu.Menu>
            <Menu.Item as={Link} to="/">Home</Menu.Item>
            <Menu.Item as={Link} to="/rated">Rated</Menu.Item>

        </Menu>
    )
}

export default Navbar;