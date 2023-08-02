import {
	Paper,
	Title,
	Flex,
	TextInput,
	Button,
	Divider,
	Text,
	Anchor,
} from "@mantine/core";
import GoogleButton from "@/components/common/GoogleButton";
import TwitterButton from "@/components/common/TwitterButton";
import { IconAt } from "@tabler/icons-react";
import Link from "next/link";

const Register = () => {
	return (
		<Flex align="center" justify="center" mih="50vh" w="100%">
			<Flex w="50%" direction="column" gap={20}>
				<Title order={3} ta="center">
					Crea tu propia página gratis!
				</Title>
				<Paper
					shadow="lg"
					p="md"
					withBorder
					mx="auto"
					w="100%"
					component="section"
				>
					<Divider
						mb={10}
						label="Elegí el nombre de tu pagina"
						labelPosition="left"
					/>
					<TextInput
						placeholder="agustinl"
						label="cafecito.app/"
						withAsterisk
					/>

					<Divider
						mt={40}
						mb={20}
						label="Elegí como ingresar"
						labelPosition="left"
					/>
					<Flex direction="column" gap={20}>
						<TextInput
							placeholder="mi@email.com"
							icon={<IconAt size="0.8rem" />}
						/>
						<Button>Continuar con Email</Button>
					</Flex>
					<Divider my={40} />
					<Flex gap={20} justify="space-around">
						<GoogleButton>Continuar con Google</GoogleButton>
						<TwitterButton>Ingresar con Twitter</TwitterButton>
					</Flex>
				</Paper>
				<Text c="dimmed" fz={14} ta="center">
					Al registrarse, acepta nuestros{" "}
					<Link href="/terms" passHref legacyBehavior>
						<Anchor href="#">términos y condiciones</Anchor>
					</Link>{" "}
					y{" "}
					<Link href="/privacy_policies" passHref legacyBehavior>
						<Anchor href="#">política de privacidad</Anchor>
					</Link>
					. Debes tener <b>al menos 18 años</b> para crear una página.
				</Text>
			</Flex>
		</Flex>
	);
};

export default Register;
