import {
	Text,
	Badge,
	Flex,
	Title,
	Paper,
	Progress,
	ActionIcon,
	Table,
	Box,
	NumberInput,
	SegmentedControl,
	TextInput,
	Textarea,
	Divider,
	Button,
	Spoiler,
    ThemeIcon
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ShareModal from "@/components/modals/ShareModal";

import {
	IconBrandTwitter,
	IconLink,
	IconCurrencyBitcoin,
	IconShare,
	IconFlag2,
	IconCoffee,
	IconMessageCircle,
    IconUserPlus
} from "@tabler/icons-react";

import fakeUser from "@/data/fakeUser";
import fakeSections from "@/data/fakeSections";
import { randomNumberGenerator } from "@/helpers/randomNumberGenerator";

const Profile = () => {
    const [opened, { open, close }] = useDisclosure(false);

	const rows = fakeUser?.topDonations?.map((donation, i) => (
		<tr key={donation.name}>
			<td>
				<Text fw={600}>{i + 1}</Text>
			</td>
			<td>{donation.name}</td>
			<td>
				<Text c="violet" fw={600}>
					{donation.countCoffees}
				</Text>
			</td>
		</tr>
	));

	return (
		<ProfileHeader
			banner={fakeUser?.user?.image?.banner}
			avatar={fakeUser?.user?.image?.profile}
			name={fakeUser?.user?.name}
			categories={fakeUser?.user?.categories}
		>
			<Flex mt={50} gap={50}>
				<Flex w="40%" direction="column" gap={20}>
					<Paper p="md" withBorder mx="auto" w="100%">
						<Flex direction="column" gap={20}>
							<Title order={4}>
								{fakeUser?.user?.goal?.title}
							</Title>

							<div>
								<Progress
									value={
										(fakeUser?.user?.goal?.collectedGoal *
											100) /
										fakeUser?.user?.goal?.amountGoal
									}
									mb={10}
								/>
								<Text c="dimmed" fz={12}>
									<b>
										{(fakeUser?.user?.goal?.collectedGoal *
											100) /
											fakeUser?.user?.goal?.amountGoal}
										%
									</b>{" "}
									del objetivo de{" "}
									<b>
										{fakeUser?.user?.goal?.amountGoal}{" "}
										Cafecitos
									</b>
								</Text>
							</div>

							<Text fz={14}>
								{fakeUser?.user?.goal?.description}
							</Text>
						</Flex>
					</Paper>

					<Paper p="md" withBorder mx="auto" w="100%">
						<Flex direction="column" gap={20}>
							<Title order={4}>Descripción</Title>

							<Flex direction="column" gap={8}>
								<Text fz={14}>
									<Spoiler
										maxHeight={110}
										showLabel="Más..."
										hideLabel="Menos"
									>
										{fakeUser?.user?.description}
									</Spoiler>
								</Text>
							</Flex>

							<Flex gap={10}>
								<ActionIcon color="violet" variant="light">
									<IconBrandTwitter size="1.125rem" />
								</ActionIcon>

								<ActionIcon color="violet" variant="light">
									<IconLink size="1.125rem" />
								</ActionIcon>
							</Flex>

							<Flex gap={10} wrap="wrap">
								{fakeUser?.user?.categories?.map(category => (
									<Link
										href={fakeSections[category].link}
										passHref
										legacyBehavior
										key={fakeSections[category].link}
									>
										<Badge radius="sm" component="a">
											{fakeSections[category].name}
										</Badge>
									</Link>
								))}
							</Flex>

							<Divider />

							<Flex align="center" gap={5}>
                                <ThemeIcon variant="outline" radius="xl">
								    <IconCoffee size="1.125rem" />
                                </ThemeIcon>
								<Text fz={14} fw={500} c="violet">
									x {fakeUser?.user?.countCoffees} recibidos
								</Text>
							</Flex>

                            <Flex align="center" gap={5}>
                                <ThemeIcon variant="outline" radius="xl">
								    <IconUserPlus size="1.125rem" />
                                </ThemeIcon>
								<Text fz={14} fw={500} c="violet">
									x {fakeUser?.user?.countPlanBuyers} suscriptores
								</Text>
							</Flex>
						</Flex>
					</Paper>

					<Paper p="md" withBorder mx="auto" w="100%">
						<Flex direction="column" gap={20}>
							<Title order={4}>Top Donadores</Title>

							<Table>
								<thead>
									<tr>
										<th>Posición</th>
										<th>Nombre</th>
										<th>Cafecitos</th>
									</tr>
								</thead>
								<tbody>{rows}</tbody>
							</Table>
						</Flex>
					</Paper>

					<ActionIcon color="red" variant="filled">
						<IconFlag2 size="1.125rem" />
					</ActionIcon>
				</Flex>

				<Flex w="100%" direction="column" gap={20}>
					<Box
						sx={theme => ({
							backgroundColor:
								theme.colorScheme === "dark"
									? theme.colors.dark[6]
									: theme.colors.gray[0],
							padding: theme.spacing.xl,
							borderRadius: theme.radius.md,
						})}
					>
						<Flex direction="column" gap={20}>
							<Title order={4}>
								{fakeUser?.user?.texts?.title}
							</Title>

							<Flex gap={20} align="flex-end">
                                <Flex align="center" gap={10}>
                                    <ThemeIcon variant="outline" radius="xl" size="lg">
                                        <IconCoffee size="1.125rem" />
                                    </ThemeIcon>
                                    <Text fw={600}>x</Text>
                                    <NumberInput placeholder="10" min={1} w={100} />
                                </Flex>

								<SegmentedControl
									data={[
										{ label: "3", value: "3s" },
										{ label: "5", value: "5s" },
										{ label: "10", value: "10s" },
									]}
								/>
							</Flex>

							<Flex direction="column" gap={10}>
								<TextInput placeholder="Nombre (opcional)" />

								<TextInput placeholder="Contacto (opcional, campo oculto)" />

								<Textarea
									placeholder="Mensaje (opcional)"
									autosize
									minRows={4}
								/>
							</Flex>

							<Divider
								label={`Invitame 10 Cafecitos (ARS $${fakeUser?.user?.priceCoffee}) con`}
								labelPosition="center"
							/>

							<Flex gap={20}>
								<Button color="blue" w="100%">
									MercadoPago
								</Button>
								<Button
									color="dark"
									leftIcon={
										<IconCurrencyBitcoin size="0.9rem" />
									}
									w="100%"
								>
									Lightning network
								</Button>
							</Flex>

							<Divider
								label="Desde el exterior de Argentina (USD $10)"
								labelPosition="center"
							/>

							<Button>
								Pagar con tarjeta internacional (USD$10)
							</Button>

							<div>
								<Text c="dimmed" fz={12}>
									* MercadoPago no procesa pagos del exterior
									de Argentina.
								</Text>
								<Text c="dimmed" fz={12}>
									* Los cafecitos no desbloquean contenido de
									la galeria.
								</Text>
							</div>
						</Flex>
					</Box>

					{fakeUser?.coffees?.map(coffee => (
						<Paper
							p="md"
							withBorder
							mx="auto"
							w="100%"
							key={coffee?._id}
						>
							<Flex direction="column" gap={20}>
								<Flex justify="space-between">
									<Title order={5}>
										{coffee?.name
											? `${coffee?.name} te compro ${coffee?.countCoffees} cafecitos`
											: `Te compraron ${coffee?.countCoffees} cafecitos`}
									</Title>

									<ActionIcon
										color="violet"
										variant="transparent"
                                        onClick={open}
									>
										<IconShare size="1.125rem" />
									</ActionIcon>
								</Flex>

								{coffee?.message && (
									<Text fz={14} c="dimmed">
										{coffee?.message}
									</Text>
								)}

								{coffee?.answer && (
									<Box
										sx={theme => ({
											backgroundColor:
												theme.colorScheme === "dark"
													? theme.colors.dark[6]
													: theme.colors.gray[0],
											padding: theme.spacing.sm,
											borderRadius: theme.radius.md,
										})}
									>
										<Flex gap={10} align="center">
											<IconMessageCircle size="1.125rem" />
											<Text fz={14}>
												{coffee?.answer}
											</Text>
										</Flex>
									</Box>
								)}
							</Flex>
						</Paper>
					))}

					<Button w="30%" mx="auto">
						Cargar mas cafecitos
					</Button>
				</Flex>
			</Flex>

            <ShareModal
                open={opened}
                close={close}
                title="Compartir"
                text="Te comprar cafecito"
            />
		</ProfileHeader>
	);
};

export default Profile;
