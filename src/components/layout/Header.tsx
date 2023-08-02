import { Flex, Button, Image } from "@mantine/core";
import Link from "next/link";

const Header = () => {
	return (
		<header>
			<Flex w="100%" justify="space-between" p={20}>
                <Link href="/" passHref legacyBehavior>
                    <Image
                        width={43}
                        height={38}
                        src="https://cdn.cafecito.app/imgs/cafecito_logo.svg"
                        alt="Without placeholder"
                        withPlaceholder
                    />
                </Link>

				<Flex gap={20}>
					<Link href="/explore" passHref legacyBehavior>
						<Button variant="subtle" component="a">
							Explorar
						</Button>
					</Link>
					<Link href="/login" passHref legacyBehavior>
						<Button component="a">Ingresar</Button>
					</Link>
				</Flex>
			</Flex>
		</header>
	);
};

export default Header;
