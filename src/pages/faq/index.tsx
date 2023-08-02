import { Accordion, Title, Divider } from "@mantine/core";

const FAQ = () => {
	return (<>
        <Title order={1} c="violet">Preguntas frecuentes</Title>

        <Divider my="xl" />

		<Accordion defaultValue="customization" variant="separated">
			<Accordion.Item value="customization">
				<Accordion.Control><b>¿Qué es Cafecito?</b></Accordion.Control>
				<Accordion.Panel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus nisl nisi, eget condimentum magna tempus ut. Maecenas a urna justo. Nam at tortor eget lectus blandit cursus vel ac metus. Mauris scelerisque eros quis porta tristique. Integer eu urna quis ipsum consequat vestibulum. Etiam et enim congue, pellentesque massa id, sagittis quam. Curabitur feugiat quis eros vitae placerat. Mauris id elit aliquet, dictum ex nec, dictum dolor.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="flexibility">
				<Accordion.Control><b>¿Cómo usar Cafecito?</b></Accordion.Control>
				<Accordion.Panel>
                    Donec bibendum bibendum odio at elementum. Curabitur odio nibh, mollis vitae odio quis, mattis fermentum est. Mauris fermentum ornare orci a convallis. Ut turpis quam, consequat in urna at, mollis rutrum est. Nulla tempus tellus at mi commodo, vel tincidunt dolor accumsan. Phasellus imperdiet mi at odio placerat, at vestibulum turpis egestas. Maecenas lobortis, mauris non tempus auctor, dui neque aliquet erat, ut elementum urna mi vitae nisi.
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="focus-ring">
				<Accordion.Control><b>¿Cómo funciona Cafecito?</b></Accordion.Control>
				<Accordion.Panel>
                    Pellentesque ultrices aliquam pulvinar. Pellentesque et felis vulputate, aliquam metus vel, ullamcorper turpis. In at nisi eget massa posuere malesuada nec quis eros. Maecenas sodales iaculis molestie. Sed non lobortis tellus. Vestibulum facilisis eu tortor suscipit venenatis. Aenean sodales felis non sapien feugiat, non ornare dolor placerat.
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
        </>
	);
};

export default FAQ;
