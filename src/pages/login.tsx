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

const Login = () => {
	return (
		<Flex align="center" justify="center" mih="50vh" w="100%">
			<Flex w="50%" direction="column" gap={20}>
				<Title order={3} ta="center">
					Iniciar sesión
				</Title>
				<Paper
					shadow="lg"
					p="md"
					withBorder
					mx="auto"
					w="100%"
					component="section"
				>
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
					¿Todavia no tenes una cuenta?{" "}
					<Link href="/register" passHref legacyBehavior>
						<Anchor>Registrate ahora</Anchor>
					</Link>
				</Text>
			</Flex>
		</Flex>
	);
};

export default Login;
