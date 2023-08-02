import {
	Title,
	Flex,
	TextInput,
	Button,
	ThemeIcon,
	Text,
	Image,
    Grid,
    Paper
} from "@mantine/core";
import { IconUserPlus, IconUserDollar } from "@tabler/icons-react";
import { Testimonial } from "@/components/common/Testimonial";
import Link from "next/link";

import fakeTestimonials from "../data/fakeTestimonials"

const Home = () => {
	return (
		<Flex direction="column" gap={100}>
			<section>
				<Title order={2} fz={36} fw={600} ta="center" mb={20}>
					Potenciá tus ideas!
				</Title>
				<Title order={3} fw={400} fz={20} ta="center">
					Cafecito es una plataforma de crowdfunding que busca unir a
					creadores de contenido, ONGs o proyectos con gente que
					quiera aportar a lo que hacen.
				</Title>
                <Paper                
					shadow="lg"
					p="md"
					withBorder
					w={400}
                    mx="auto"
                    mt={40}
                >
                    <Flex gap={10} justify="center" align="flex-end">
                        <TextInput placeholder="agustinl" label="cafecito.app/" />
                        <Link href="/register" passHref legacyBehavior>
                            <Button component="a">Crear cuenta</Button>
                        </Link>
                    </Flex>
                </Paper>
			</section>

			<section>
				<Title
					order={2}
					fz={36}
					fw={600}
					ta="center"
					mb={50}
					color="violet"
				>
					¿Cómo funciona Cafecito?
				</Title>

				<Flex justify="center" align="center" gap={50}>
					<Image
						src="/svg/hero_image_2.svg"
						alt=""
						maw={400}
						mx="auto"
					/>

					<Flex direction="column" w="50%" gap={50}>
						<Flex direction="column">
							<ThemeIcon
								variant="gradient"
								gradient={{
									from: "violet.9",
									to: "violet.5",
									deg: 35,
								}}
								size="xl"
								radius="xl"
							>
								<IconUserPlus />
							</ThemeIcon>
							<Title order={3} fz={20} my={10}>
								Creá tu cuenta
							</Title>
							<Text>
								Solo te llevará 60 segundos personalizar tu
								perfil y comenzar a compartir lo que hacés.
							</Text>
						</Flex>
						<Flex direction="column">
							<ThemeIcon
								variant="gradient"
								gradient={{
									from: "violet.9",
									to: "violet.5",
									deg: 35,
								}}
								size="xl"
								radius="xl"
							>
								<IconUserDollar />
							</ThemeIcon>
							<Title order={3} fz={20} my={10}>
								Creá contenido
							</Title>
							<Text>
								Contale a tu comunidad sobre Cafecito y tus
								objetivos, publicalo en redes sociales así más
								personas podrán ver tu perfil.
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</section>

			<section>
				<Title
					order={2}
					fz={36}
					fw={600}
					ta="center"
					mb={50}
					color="violet"
				>
					¿Qué dicen de Cafecito?
				</Title>

				<Grid>
                    {
                        fakeTestimonials?.map((data, i) => 
                            <Grid.Col key={i} span={4}>
                                <Testimonial {...data} />
                            </Grid.Col>
                        )
                    }
                </Grid>
			</section>
		</Flex>
    );
};

export default Home;
