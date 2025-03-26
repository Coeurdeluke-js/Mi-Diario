// Datos de las entradas del diario
const entries = {
    '2025-03-23': [
        {
            title: 'Entrada 1: La lucha contra la comodidad',
            content: 'Me siento imparable, un torbellino de energía pura. Como un caballo de batalla con fuerza sobrenatural, un ser cuya fuerza interior es un manantial inagotable. La energía se retroalimenta, un ciclo perpetuo de vitalidad. Esta mañana, a las 5:00 a.m., la lluvia golpeaba las ventanas con insistencia, un recordatorio de la comodidad que me esperaba bajo las sábanas. Pero la determinación rugía más fuerte. Salí a entrenar, como cada día de estas últimas semanas. La sensación de desafiar la zona de confort, de elegir la incomodidad, es un elixir embriagador. ¿Es fuerza de voluntad? Quizás. O tal vez sea la predisposición mental que he cultivado, esa certeza de que "yo elijo que suceda". Y sucedió.',
            date: '23 de marzo de 2025'
        },
        {
            title: 'Entrada 2: La curiosidad como combustible: El cerebro en expansión.',
            content: 'Los hábitos son los arquitectos silenciosos de nuestro futuro. Mientras desayuno, me sumerjo en documentales en inglés, un idioma que se está convirtiendo en una extensión natural de mi ser. La comunicación abre puertas a realidades inimaginables, y dominar este idioma es una llave maestra. Hoy, el tema es el cerebro humano, un universo fascinante. El expositor habla de salud, un pilar fundamental en mi misión de empoderar a otros. Adquirir este conocimiento en inglés es un doble deleite, una prueba de que mis límites son maleables.',
            date: '23 de marzo de 2025'
        },
        {
            title: 'Entrada 3: La profundidad de la conexión: Explorando las creencias familiares.',
            content: 'Las conversaciones con mamá son un hervidero de pasiones y creencias. A veces, siento que las ideas chocan como olas contra un acantilado, sin encontrar un punto de encuentro. ¿Son nuestras creencias muros infranqueables que nublan nuestro juicio? ¿Somos capaces de ver más allá de ellas, hacia la trascendencia? La vida nos presenta preguntas que resuenan en lo más profundo del ser.',
            date: '23 de marzo de 2025'
        }
    ],
    '2025-03-24': [
        {
            title: 'Entrada 4: El Laberinto de la Autenticidad',
            content: 'A veces, ser uno mismo es un laberinto. Nos adaptamos, ocultamos fragilidades, evitamos el dolor. Pero, ¿quién abraza el sufrimiento? Nos cuesta aceptar la vulnerabilidad, fingimos omnipotencia, vivimos una ficción. Reconocer nuestra finitud duele, admitir que el ego es enemigo, también. Y así, huimos: somos ignorantes, vulnerables, falibles. El deseo y el miedo nos impulsan, y el rechazo nos paraliza.',
            date: '24 de marzo de 2025'
        },
        {
            title: 'Entrada 5: Aprendiendo en la Tormenta',
            content: 'Anoche, mi hermano cenó en casa. Su vida es un torbellino. Le dije que lamento no haber sido su roca en tiempos difíciles, batallando mis propias guerras. Siempre fui honesto, aunque frágil. Pero, en mi esencia, lo vi brillar, protagonista de su vida, superando tormentas. No estuve en la tempestad, pero aprendimos juntos. Y esto, apenas comienza.',
            date: '24 de marzo de 2025'
        },
        {
            title: 'Entrada 6: El laberinto de la justificación',
            content: 'La ignorancia, ese manto oscuro que cubre nuestra comprensión, es el verdadero arquitecto de los problemas de la humanidad. La incapacidad de navegar situaciones complejas desencadena una cascada de reacciones que enredan aún más el tejido de la vida cotidiana. Sin embargo, ¿quién soy yo para arrojar la primera piedra? Yo también he sido un peregrino en el desierto del desconocimiento, y aún lo soy. La única diferencia es mi sed insaciable de aprendizaje, mi decisión de esculpir mi mente con el cincel de la educación. El miedo, ese titiritero invisible, controla gran parte de nuestras acciones. Buscamos refugio en la comodidad de lo conocido, evitamos el dolor a toda costa. Pero, ¿a qué precio? Me cuesta comprender cómo algunos culpan al gobierno de sus males económicos, sin siquiera examinar los cimientos de sus propios hábitos financieros. ¿Acaso no somos todos arquitectos de nuestro destino? No veo diferencias entre un obrero, un desamparado o un magnate. Todos compartimos la capacidad de aprender y aplicar ese conocimiento. La vida, en su esencia, es un reflejo de lo que hemos aprendido y cómo lo utilizamos.',
            date: '24 de marzo de 2025'
        },
        {
            title: 'Entrada 7: La alquimia de lo cotidiano',
            content: 'Esta mañana, mientras preparaba mi mate cocido con limón, me pregunté cómo transformar las sobras en un manjar. La respuesta surgió como una chispa: trocearlas, endulzarlas y freírlas. El resultado fue un aperitivo exquisito, una creación culinaria nacida de la necesidad. Puede que algunos nutricionistas frunzan el ceño ante el aceite y el azúcar, pero mi enfoque es otro. Transformé "desechos" en un manjar, un acto de alquimia culinaria. Me sentí como un alquimista, capaz de convertir lo ordinario en extraordinario.',
            date: '24 de marzo de 2025'
        },
        {
            title: 'Entrada 8:  El espejo de la autocompasión',
            content: 'Hoy, al despertar, me enfrenté al espejo de la autocompasión. Me pregunté por qué soy tan duro conmigo mismo, por qué me exijo tanto. ¿Acaso no merezco un poco de indulgencia?La autocompasión no es debilidad, sino un acto de valentía. Requiere reconocer nuestras imperfecciones y aceptarnos tal como somos. No se trata de justificar nuestros errores, sino de aprender de ellos y seguir adelante.La vida es un viaje lleno de altibajos. Habrá momentos de alegría y momentos de tristeza, momentos de éxito y momentos de fracaso. Lo importante es no perder la fe en nosotros mismos, recordar que somos capaces de superar cualquier obstáculo.La autocompasión es un bálsamo para el alma, un recordatorio de que somos humanos y merecemos amor y respeto, incluso de nosotros mismos.',
            date: '23 de marzo de 2025'
        }
        
    ],
    '2025-03-25': [
        {
            title: 'Entrada 9: La Trampa del Sentido',
            content: 'El propósito, esa obsesión humana. ¿Qué somos, qué hacemos, adónde vamos? Preguntas que resuenan en el vacío, buscando una respuesta que quizás no exista. ¿Es el sentido de la vida más que una invención de nuestro ego, una forma de justificar nuestra existencia? "Yo valgo, yo merezco", nos repetimos, como un mantra para calmar la angustia. Pero, ¿no es esa búsqueda una trampa, una distracción del simple hecho de existir? ¿Por qué necesitamos tanto significado, tanta razón, para simplemente ser? La mente, ese torbellino incesante, nos arrastra a la búsqueda, nos impide fluir con el mundo. He leído a Søren Kierkegaard, con su énfasis en la subjetividad y la elección individual, y a Martin Heidegger, con su exploración del "ser-para-la-muerte" y la autenticidad. Ambos me hacen cuestionar si la búsqueda de propósito es una forma de evitar la confrontación con nuestra propia finitud. Creo que la clave está en el autoconocimiento, en la exploración de nuestras emociones, en la construcción de nuestra propia verdad. Solo entonces, desde la individualidad, podemos darle forma a nuestra existencia, sin buscar justificaciones externas.',
            date: '25 de marzo de 2025'
        },
        {
            title: 'Entrada 10: El Desafío de la Autenticidad',
            content: 'Ser auténtico, ese desafío constante. En un mundo que nos empuja a la conformidad, a la búsqueda de validación externa, ¿cómo encontramos nuestra propia voz? ¿Cómo nos liberamos de las expectativas, de los "deberías" y los "tienes que"? El ego, ese maestro del disfraz, nos susurra al oído que debemos ser perfectos, exitosos, admirados. Pero, ¿no es esa búsqueda una trampa, una forma de perdernos en la multitud? La autenticidad no es un destino, es un camino, una exploración constante de nuestro ser. Implica cuestionar nuestras creencias, desafiar nuestras zonas de confort, abrazar nuestra individualidad. Es un acto de rebeldía contra la mediocridad, contra la conformidad, contra el miedo a ser diferentes. Y es en esa rebeldía, en esa valentía de ser nosotros mismos, donde encontramos la verdadera libertad.',
            date: '25 de marzo de 2025'
        },
    ],
    '2025-03-26': [
        {
            title: 'Entrada 11: La Tiranía de la Distracción',
            content: 'Resulta casi increíble cómo la sociedad ha tejido hábitos tan perjudiciales para la salud, especialmente para ese órgano complejo y fascinante que es el cerebro. Me intriga profundamente la naturaleza de nuestras decisiones, cómo ejercemos esa voluntad que, cuando se combina con la desinformación y la ignorancia, se convierte en un cóctel explosivo. No soy neurocientífico, pero me apasiona explorar los recovecos de la mente humana. Y desde esa perspectiva, observo cómo el aprendizaje, ese proceso intrincado y hermoso, se ve constantemente saboteado por distracciones que nosotros mismos elegimos. El cerebro, como un jardín delicado, necesita espacio, silencio, un entorno propicio para florecer. Pero lo bombardeamos con estímulos constantes, con ruido, con información basura. Nos convertimos en nuestros propios verdugos, impidiendo que ese órgano maravilloso despliegue todo su potencial. ¿Acaso no merecemos darle a nuestro cerebro el respeto y la atención que se merece?',
            date: '26 de marzo de 2025'
        },
        {
            title: 'Entrada 10: La Voluntad y el Desconocimiento',
            content: 'La voluntad, esa fuerza misteriosa que nos impulsa a actuar, me fascina y me aterra a partes iguales. Cuando se combina con el conocimiento, puede ser una herramienta poderosa para la transformación. Pero cuando se ejerce desde la ignorancia, desde la desinformación, se convierte en un arma de destrucción masiva. Observo a mi alrededor cómo las personas toman decisiones que perjudican su salud, su bienestar, su futuro, sin siquiera cuestionar sus hábitos. Se aferran a creencias obsoletas, a información falsa, a distracciones que les impiden ver la realidad. Y me pregunto, ¿cómo podemos romper ese círculo vicioso? ¿Cómo podemos despertar la curiosidad, el deseo de aprender, la voluntad de cambiar? No tengo todas las respuestas, pero sé que la clave está en la educación, en la apertura mental, en la valentía de cuestionar nuestras propias creencias. El cerebro, ese universo infinito, merece ser explorado, comprendido, respetado. Y nosotros, como habitantes de ese universo, tenemos la responsabilidad de cuidarlo, de cultivarlo, de hacerlo florecer.',
            date: '26 de marzo de 2025'
        },
    ]
    
};
