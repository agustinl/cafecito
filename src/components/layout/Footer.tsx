import { Flex, Image, Anchor, ActionIcon } from "@mantine/core";
import { IconBrandTwitter, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<Flex justify="space-between" p={20} align="center">
				<Image
					width={43}
					height={38}
					src="https://cdn.cafecito.app/imgs/cafecito_logo.svg"
					alt="Without placeholder"
					withPlaceholder
				/>
				<Flex gap={20}>
                    <Link href="/faq" passHref legacyBehavior>
                        <Anchor
                            c="dimmed"
                            fz={14}
                        >
                            Preguntas frecuentes
                        </Anchor>
                    </Link>
                    
                    <Link href="/terms" passHref legacyBehavior>
                        <Anchor
                            c="dimmed"
                            fz={14}
                        >
                            Términos y condiciones
                        </Anchor>
                    </Link>
                    
                    <Link href="/privacy_policies" passHref legacyBehavior>
                        <Anchor
                            c="dimmed"
                            fz={14}
                        >
                            Política de privacidad
                        </Anchor>
                    </Link>
				</Flex>

				<Flex gap={10}>
					<ActionIcon color="violet" variant="light">
						<IconBrandTwitter size="1.125rem" />
					</ActionIcon>

					<ActionIcon color="violet" variant="light">
						<IconBrandInstagram size="1.125rem" />
					</ActionIcon>
				</Flex>
			</Flex>
		</footer>
	);
};

export default Footer;
