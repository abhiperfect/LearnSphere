import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Alert,
} from "@mui/material";
import StickyHeader from "../shared/StickyHeader";

const textQuestions = [
  {
    id: 1,
    passage:
      "The Amazon Rainforest, often referred to as the 'lungs of the Earth,' is one of the most significant ecosystems on the planet. It spans over 5.5 million square kilometers and produces approximately 20% of the world's oxygen through photosynthesis. This dense forest is home to millions of plant and animal species, many of which are found nowhere else on Earth. In addition to being a vital source of oxygen, the Amazon also plays a crucial role in regulating global temperatures and maintaining biodiversity, making it an essential part of the world's climate system. However, deforestation and human activities pose a significant threat to this valuable ecosystem. It is essential to protect and preserve the Amazon Rainforest for the well-being of our planet and future generations. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, fugit! Dignissimos perferendis eius dolores repellat! Consequatur harum adipisci minus accusamus quidem! Vel fugit veritatis corrupti voluptatum magnam nostrum sunt id, molestias explicabo officiis architecto sapiente sequi repudiandae qui recusandae labore ducimus, dicta tempora iste est porro ab fugiat alias quasi! Minima delectus quam doloribus amet nihil, quas et aperiam tempora ullam unde dolor minus pariatur quasi? Quia ipsam odit quod, fugiat commodi odio asperiores fugit! Excepturi accusamus fugiat quas rem, commodi ipsa placeat laudantium delectus soluta quam magnam beatae exercitationem aspernatur molestias ratione tempore praesentium sed? Cumque sequi voluptates repellat fugiat error est debitis ducimus nostrum asperiores non iusto perspiciatis totam atque exercitationem quam quasi minus, sunt impedit, illum doloribus distinctio accusamus! Aliquam id nobis porro, amet dolore provident itaque quaerat quibusdam totam! Maiores provident consectetur, aperiam corrupti similique eius harum asperiores, consequuntur odio autem praesentium quisquam dolor rerum nostrum! Obcaecati dignissimos at provident neque. Reprehenderit molestias exercitationem delectus doloribus assumenda tenetur non minus nesciunt, nemo molestiae, perferendis quas ipsum id sunt voluptatem quia. Laboriosam, ipsa libero. Doloremque perspiciatis omnis aperiam, atque tenetur maxime necessitatibus dolore commodi eos, at sit hic quaerat distinctio nihil beatae suscipit officia et accusantium doloribus vitae illo cum facere in autem. Dolore temporibus ducimus perferendis quam repellat excepturi impedit ea odio numquam distinctio culpa praesentium, quos velit. In quam ea rem assumenda quo nemo adipisci est, odit obcaecati ab doloribus perferendis provident inventore ullam deleniti reiciendis dolores, aliquid nisi molestias? Quidem veniam itaque, non suscipit fugiat hic nam cum cupiditate! Vero, ut accusamus! Aliquam blanditiis nulla doloribus consectetur expedita, sunt veritatis aliquid consequuntur, eaque, nobis hic quasi facere dignissimos excepturi alias ex ratione aut cum. Debitis, nemo numquam? Dolorum distinctio nihil accusamus ipsa in exercitationem laudantium sequi, molestiae, harum sunt voluptates nobis aperiam officia id delectus, illum maiores! Porro assumenda fuga dicta quisquam consequatur. Asperiores sequi sunt rem neque facere, accusantium aspernatur corrupti, omnis ad ratione numquam velit necessitatibus atque. Velit fugiat doloribus ad pariatur ipsa inventore non, minima facere, blanditiis quisquam alias maiores veniam repellat ex est odit eaque. Iure, iste quasi? Molestiae at nisi cumque laboriosam quia officiis praesentium? Deleniti, vero, numquam quia iusto est ipsa odit praesentium in saepe molestiae facilis nihil provident minus mollitia quis quidem. Qui rerum minima quibusdam voluptates autem adipisci accusamus. Atque suscipit, eligendi consequatur nam natus ea qui ipsa illum reiciendis cupiditate voluptatum soluta, perspiciatis doloribus provident. Harum soluta voluptate tempore saepe facere obcaecati qui nam numquam totam itaque. Incidunt odio neque non voluptatum eveniet! Eveniet amet, quo, unde distinctio ad cumque expedita eaque quia autem maiores iusto vitae tempora qui, commodi reiciendis fuga exercitationem ipsum quam. Laudantium laborum necessitatibus sint omnis molestiae doloribus eaque, nulla magnam explicabo quo sit iste minus asperiores ratione atque fuga. Natus soluta sed aliquid, similique autem sit. Sapiente, quibusdam. Laboriosam sapiente voluptate odio voluptatibus maxime blanditiis veritatis eos. Odit, explicabo quidem minus inventore quis distinctio unde reiciendis nemo asperiores officiis, libero harum esse iure id hic. Accusamus voluptatibus vel nulla placeat.",

    question: "What percentage of the world's oxygen does the Amazon produce?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: "20%",
  },
  {
    id: 2,
    passage:
      "Isaac Newton, one of the most influential scientists in history, revolutionized our understanding of physics with his laws of motion and universal gravitation. The story goes that he was sitting under an apple tree when he saw an apple fall to the ground. This seemingly ordinary event led him to question why objects always fall downward rather than moving in other directions. His curiosity led to the development of the theory of gravity, which explains how objects attract one another. Newton's discoveries laid the foundation for classical mechanics, shaping the way we understand movement and forces in the universe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, fugit! Dignissimos perferendis eius dolores repellat! Consequatur harum adipisci minus accusamus quidem! Vel fugit veritatis corrupti voluptatum magnam nostrum sunt id, molestias explicabo officiis architecto sapiente sequi repudiandae qui recusandae labore ducimus, dicta tempora iste est porro ab fugiat alias quasi! Minima delectus quam doloribus amet nihil, quas et aperiam tempora ullam unde dolor minus pariatur quasi? Quia ipsam odit quod, fugiat commodi odio asperiores fugit! Excepturi accusamus fugiat quas rem, commodi ipsa placeat laudantium delectus soluta quam magnam beatae exercitationem aspernatur molestias ratione tempore praesentium sed? Cumque sequi voluptates repellat fugiat error est debitis ducimus nostrum asperiores non iusto perspiciatis totam atque exercitationem quam quasi minus, sunt impedit, illum doloribus distinctio accusamus! Aliquam id nobis porro, amet dolore provident itaque quaerat quibusdam totam! Maiores provident consectetur, aperiam corrupti similique eius harum asperiores, consequuntur odio autem praesentium quisquam dolor rerum nostrum! Obcaecati dignissimos at provident neque. Reprehenderit molestias exercitationem delectus doloribus assumenda tenetur non minus nesciunt, nemo molestiae, perferendis quas ipsum id sunt voluptatem quia. Laboriosam, ipsa libero. Doloremque perspiciatis omnis aperiam, atque tenetur maxime necessitatibus dolore commodi eos, at sit hic quaerat distinctio nihil beatae suscipit officia et accusantium doloribus vitae illo cum facere in autem. Dolore temporibus ducimus perferendis quam repellat excepturi impedit ea odio numquam distinctio culpa praesentium, quos velit. In quam ea rem assumenda quo nemo adipisci est, odit obcaecati ab doloribus perferendis provident inventore ullam deleniti reiciendis dolores, aliquid nisi molestias? Quidem veniam itaque, non suscipit fugiat hic nam cum cupiditate! Vero, ut accusamus! Aliquam blanditiis nulla doloribus consectetur expedita, sunt veritatis aliquid consequuntur, eaque, nobis hic quasi facere dignissimos excepturi alias ex ratione aut cum. Debitis, nemo numquam? Dolorum distinctio nihil accusamus ipsa in exercitationem laudantium sequi, molestiae, harum sunt voluptates nobis aperiam officia id delectus, illum maiores! Porro assumenda fuga dicta quisquam consequatur. Asperiores sequi sunt rem neque facere, accusantium aspernatur corrupti, omnis ad ratione numquam velit necessitatibus atque. Velit fugiat doloribus ad pariatur ipsa inventore non, minima facere, blanditiis quisquam alias maiores veniam repellat ex est odit eaque. Iure, iste quasi? Molestiae at nisi cumque laboriosam quia officiis praesentium? Deleniti, vero, numquam quia iusto est ipsa odit praesentium in saepe molestiae facilis nihil provident minus mollitia quis quidem. Qui rerum minima quibusdam voluptates autem adipisci accusamus. Atque suscipit, eligendi consequatur nam natus ea qui ipsa illum reiciendis cupiditate voluptatum soluta, perspiciatis doloribus provident. Harum soluta voluptate tempore saepe facere obcaecati qui nam numquam totam itaque. Incidunt odio neque non voluptatum eveniet! Eveniet amet, quo, unde distinctio ad cumque expedita eaque quia autem maiores iusto vitae tempora qui, commodi reiciendis fuga exercitationem ipsum quam. Laudantium laborum necessitatibus sint omnis molestiae doloribus eaque, nulla magnam explicabo quo sit iste minus asperiores ratione atque fuga. Natus soluta sed aliquid, similique autem sit. Sapiente, quibusdam. Laboriosam sapiente voluptate odio voluptatibus maxime blanditiis veritatis eos. Odit, explicabo quidem minus inventore quis distinctio unde reiciendis nemo asperiores officiis, libero harum esse iure id hic. Accusamus voluptatibus vel nulla placeat.",
    question: "What event inspired Newton’s discovery of gravity?",
    options: [
      "Seeing a shooting star",
      "Dropping a ball",
      "An apple falling",
      "Reading a book",
    ],
    correctAnswer: "An apple falling",
  },
  {
    id: 3,
    passage:
      "The Great Wall of China is one of the most impressive architectural achievements in human history, stretching over 13,000 miles. Constructed over several centuries, its primary purpose was to protect Chinese states from invasions by nomadic groups from the north. The wall was built using various materials, including bricks, tamped earth, and wood, depending on the region. Besides serving as a defensive barrier, it also helped regulate trade along the Silk Road and facilitated communication across vast territories. Today, it stands as a symbol of China's rich history and engineering prowess. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, fugit! Dignissimos perferendis eius dolores repellat! Consequatur harum adipisci minus accusamus quidem! Vel fugit veritatis corrupti voluptatum magnam nostrum sunt id, molestias explicabo officiis architecto sapiente sequi repudiandae qui recusandae labore ducimus, dicta tempora iste est porro ab fugiat alias quasi! Minima delectus quam doloribus amet nihil, quas et aperiam tempora ullam unde dolor minus pariatur quasi? Quia ipsam odit quod, fugiat commodi odio asperiores fugit! Excepturi accusamus fugiat quas rem, commodi ipsa placeat laudantium delectus soluta quam magnam beatae exercitationem aspernatur molestias ratione tempore praesentium sed? Cumque sequi voluptates repellat fugiat error est debitis ducimus nostrum asperiores non iusto perspiciatis totam atque exercitationem quam quasi minus, sunt impedit, illum doloribus distinctio accusamus! Aliquam id nobis porro, amet dolore provident itaque quaerat quibusdam totam! Maiores provident consectetur, aperiam corrupti similique eius harum asperiores, consequuntur odio autem praesentium quisquam dolor rerum nostrum! Obcaecati dignissimos at provident neque. Reprehenderit molestias exercitationem delectus doloribus assumenda tenetur non minus nesciunt, nemo molestiae, perferendis quas ipsum id sunt voluptatem quia. Laboriosam, ipsa libero. Doloremque perspiciatis omnis aperiam, atque tenetur maxime necessitatibus dolore commodi eos, at sit hic quaerat distinctio nihil beatae suscipit officia et accusantium doloribus vitae illo cum facere in autem. Dolore temporibus ducimus perferendis quam repellat excepturi impedit ea odio numquam distinctio culpa praesentium, quos velit. In quam ea rem assumenda quo nemo adipisci est, odit obcaecati ab doloribus perferendis provident inventore ullam deleniti reiciendis dolores, aliquid nisi molestias? Quidem veniam itaque, non suscipit fugiat hic nam cum cupiditate! Vero, ut accusamus! Aliquam blanditiis nulla doloribus consectetur expedita, sunt veritatis aliquid consequuntur, eaque, nobis hic quasi facere dignissimos excepturi alias ex ratione aut cum. Debitis, nemo numquam? Dolorum distinctio nihil accusamus ipsa in exercitationem laudantium sequi, molestiae, harum sunt voluptates nobis aperiam officia id delectus, illum maiores! Porro assumenda fuga dicta quisquam consequatur. Asperiores sequi sunt rem neque facere, accusantium aspernatur corrupti, omnis ad ratione numquam velit necessitatibus atque. Velit fugiat doloribus ad pariatur ipsa inventore non, minima facere, blanditiis quisquam alias maiores veniam repellat ex est odit eaque. Iure, iste quasi? Molestiae at nisi cumque laboriosam quia officiis praesentium? Deleniti, vero, numquam quia iusto est ipsa odit praesentium in saepe molestiae facilis nihil provident minus mollitia quis quidem. Qui rerum minima quibusdam voluptates autem adipisci accusamus. Atque suscipit, eligendi consequatur nam natus ea qui ipsa illum reiciendis cupiditate voluptatum soluta, perspiciatis doloribus provident. Harum soluta voluptate tempore saepe facere obcaecati qui nam numquam totam itaque. Incidunt odio neque non voluptatum eveniet! Eveniet amet, quo, unde distinctio ad cumque expedita eaque quia autem maiores iusto vitae tempora qui, commodi reiciendis fuga exercitationem ipsum quam. Laudantium laborum necessitatibus sint omnis molestiae doloribus eaque, nulla magnam explicabo quo sit iste minus asperiores ratione atque fuga. Natus soluta sed aliquid, similique autem sit. Sapiente, quibusdam. Laboriosam sapiente voluptate odio voluptatibus maxime blanditiis veritatis eos. Odit, explicabo quidem minus inventore quis distinctio unde reiciendis nemo asperiores officiis, libero harum esse iure id hic. Accusamus voluptatibus vel nulla placeat.",
    question: "What was the main purpose of the Great Wall of China?",
    options: ["Tourism", "Trade", "Protection", "Agriculture"],
    correctAnswer: "Protection",
  },
  {
    id: 4,
    passage:
      "Water is a fundamental substance for life on Earth, and its physical properties have been extensively studied by scientists. One of its key characteristics is its boiling point, which is 100°C (212°F) under normal atmospheric pressure at sea level. However, this boiling point can vary depending on altitude. At higher elevations, where atmospheric pressure is lower, water boils at a lower temperature. This phenomenon is particularly relevant for cooking, as food takes longer to cook at high altitudes due to the reduced boiling temperature of water. Understanding this concept is crucial in fields such as chemistry, physics, and even culinary science. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, fugit! Dignissimos perferendis eius dolores repellat! Consequatur harum adipisci minus accusamus quidem! Vel fugit veritatis corrupti voluptatum magnam nostrum sunt id, molestias explicabo officiis architecto sapiente sequi repudiandae qui recusandae labore ducimus, dicta tempora iste est porro ab fugiat alias quasi! Minima delectus quam doloribus amet nihil, quas et aperiam tempora ullam unde dolor minus pariatur quasi? Quia ipsam odit quod, fugiat commodi odio asperiores fugit! Excepturi accusamus fugiat quas rem, commodi ipsa placeat laudantium delectus soluta quam magnam beatae exercitationem aspernatur molestias ratione tempore praesentium sed? Cumque sequi voluptates repellat fugiat error est debitis ducimus nostrum asperiores non iusto perspiciatis totam atque exercitationem quam quasi minus, sunt impedit, illum doloribus distinctio accusamus! Aliquam id nobis porro, amet dolore provident itaque quaerat quibusdam totam! Maiores provident consectetur, aperiam corrupti similique eius harum asperiores, consequuntur odio autem praesentium quisquam dolor rerum nostrum! Obcaecati dignissimos at provident neque. Reprehenderit molestias exercitationem delectus doloribus assumenda tenetur non minus nesciunt, nemo molestiae, perferendis quas ipsum id sunt voluptatem quia. Laboriosam, ipsa libero. Doloremque perspiciatis omnis aperiam, atque tenetur maxime necessitatibus dolore commodi eos, at sit hic quaerat distinctio nihil beatae suscipit officia et accusantium doloribus vitae illo cum facere in autem. Dolore temporibus ducimus perferendis quam repellat excepturi impedit ea odio numquam distinctio culpa praesentium, quos velit. In quam ea rem assumenda quo nemo adipisci est, odit obcaecati ab doloribus perferendis provident inventore ullam deleniti reiciendis dolores, aliquid nisi molestias? Quidem veniam itaque, non suscipit fugiat hic nam cum cupiditate! Vero, ut accusamus! Aliquam blanditiis nulla doloribus consectetur expedita, sunt veritatis aliquid consequuntur, eaque, nobis hic quasi facere dignissimos excepturi alias ex ratione aut cum. Debitis, nemo numquam? Dolorum distinctio nihil accusamus ipsa in exercitationem laudantium sequi, molestiae, harum sunt voluptates nobis aperiam officia id delectus, illum maiores! Porro assumenda fuga dicta quisquam consequatur. Asperiores sequi sunt rem neque facere, accusantium aspernatur corrupti, omnis ad ratione numquam velit necessitatibus atque. Velit fugiat doloribus ad pariatur ipsa inventore non, minima facere, blanditiis quisquam alias maiores veniam repellat ex est odit eaque. Iure, iste quasi? Molestiae at nisi cumque laboriosam quia officiis praesentium? Deleniti, vero, numquam quia iusto est ipsa odit praesentium in saepe molestiae facilis nihil provident minus mollitia quis quidem. Qui rerum minima quibusdam voluptates autem adipisci accusamus. Atque suscipit, eligendi consequatur nam natus ea qui ipsa illum reiciendis cupiditate voluptatum soluta, perspiciatis doloribus provident. Harum soluta voluptate tempore saepe facere obcaecati qui nam numquam totam itaque. Incidunt odio neque non voluptatum eveniet! Eveniet amet, quo, unde distinctio ad cumque expedita eaque quia autem maiores iusto vitae tempora qui, commodi reiciendis fuga exercitationem ipsum quam. Laudantium laborum necessitatibus sint omnis molestiae doloribus eaque, nulla magnam explicabo quo sit iste minus asperiores ratione atque fuga. Natus soluta sed aliquid, similique autem sit. Sapiente, quibusdam. Laboriosam sapiente voluptate odio voluptatibus maxime blanditiis veritatis eos. Odit, explicabo quidem minus inventore quis distinctio unde reiciendis nemo asperiores officiis, libero harum esse iure id hic. Accusamus voluptatibus vel nulla placeat.",
    question: "At what temperature does water boil at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    id: 5,
    passage:
      "The Eiffel Tower, one of the most recognizable landmarks in the world, was originally designed as a temporary structure for the 1889 World's Fair held in Paris. Built by the engineer Gustave Eiffel, the tower was meant to showcase France’s advancements in engineering and architecture. Initially, many Parisians criticized its design, calling it an eyesore. However, over time, the Eiffel Tower became a beloved symbol of France and an iconic part of its cultural heritage. Standing at 330 meters tall, it attracts millions of visitors each year and continues to be a testament to human ingenuity and artistic vision. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, fugit! Dignissimos perferendis eius dolores repellat! Consequatur harum adipisci minus accusamus quidem! Vel fugit veritatis corrupti voluptatum magnam nostrum sunt id, molestias explicabo officiis architecto sapiente sequi repudiandae qui recusandae labore ducimus, dicta tempora iste est porro ab fugiat alias quasi! Minima delectus quam doloribus amet nihil, quas et aperiam tempora ullam unde dolor minus pariatur quasi? Quia ipsam odit quod, fugiat commodi odio asperiores fugit! Excepturi accusamus fugiat quas rem, commodi ipsa placeat laudantium delectus soluta quam magnam beatae exercitationem aspernatur molestias ratione tempore praesentium sed? Cumque sequi voluptates repellat fugiat error est debitis ducimus nostrum asperiores non iusto perspiciatis totam atque exercitationem quam quasi minus, sunt impedit, illum doloribus distinctio accusamus! Aliquam id nobis porro, amet dolore provident itaque quaerat quibusdam totam! Maiores provident consectetur, aperiam corrupti similique eius harum asperiores, consequuntur odio autem praesentium quisquam dolor rerum nostrum! Obcaecati dignissimos at provident neque. Reprehenderit molestias exercitationem delectus doloribus assumenda tenetur non minus nesciunt, nemo molestiae, perferendis quas ipsum id sunt voluptatem quia. Laboriosam, ipsa libero. Doloremque perspiciatis omnis aperiam, atque tenetur maxime necessitatibus dolore commodi eos, at sit hic quaerat distinctio nihil beatae suscipit officia et accusantium doloribus vitae illo cum facere in autem. Dolore temporibus ducimus perferendis quam repellat excepturi impedit ea odio numquam distinctio culpa praesentium, quos velit. In quam ea rem assumenda quo nemo adipisci est, odit obcaecati ab doloribus perferendis provident inventore ullam deleniti reiciendis dolores, aliquid nisi molestias? Quidem veniam itaque, non suscipit fugiat hic nam cum cupiditate! Vero, ut accusamus! Aliquam blanditiis nulla doloribus consectetur expedita, sunt veritatis aliquid consequuntur, eaque, nobis hic quasi facere dignissimos excepturi alias ex ratione aut cum. Debitis, nemo numquam? Dolorum distinctio nihil accusamus ipsa in exercitationem laudantium sequi, molestiae, harum sunt voluptates nobis aperiam officia id delectus, illum maiores! Porro assumenda fuga dicta quisquam consequatur. Asperiores sequi sunt rem neque facere, accusantium aspernatur corrupti, omnis ad ratione numquam velit necessitatibus atque. Velit fugiat doloribus ad pariatur ipsa inventore non, minima facere, blanditiis quisquam alias maiores veniam repellat ex est odit eaque. Iure, iste quasi? Molestiae at nisi cumque laboriosam quia officiis praesentium? Deleniti, vero, numquam quia iusto est ipsa odit praesentium in saepe molestiae facilis nihil provident minus mollitia quis quidem. Qui rerum minima quibusdam voluptates autem adipisci accusamus. Atque suscipit, eligendi consequatur nam natus ea qui ipsa illum reiciendis cupiditate voluptatum soluta, perspiciatis doloribus provident. Harum soluta voluptate tempore saepe facere obcaecati qui nam numquam totam itaque. Incidunt odio neque non voluptatum eveniet! Eveniet amet, quo, unde distinctio ad cumque expedita eaque quia autem maiores iusto vitae tempora qui, commodi reiciendis fuga exercitationem ipsum quam. Laudantium laborum necessitatibus sint omnis molestiae doloribus eaque, nulla magnam explicabo quo sit iste minus asperiores ratione atque fuga. Natus soluta sed aliquid, similique autem sit. Sapiente, quibusdam. Laboriosam sapiente voluptate odio voluptatibus maxime blanditiis veritatis eos. Odit, explicabo quidem minus inventore quis distinctio unde reiciendis nemo asperiores officiis, libero harum esse iure id hic. Accusamus voluptatibus vel nulla placeat.",
    question: "Why was the Eiffel Tower originally built?",
    options: [
      "For military defense",
      "As a lighthouse",
      "For the World's Fair",
      "To test construction techniques",
    ],
    correctAnswer: "For the World's Fair",
  },
];

const TextQuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [passagesRead, setPassagesRead] = useState(
    new Array(textQuestions.length).fill(false)
  );
  const [results, setResults] = useState(null);

  const passageRef = useRef(null);

  // Detect if the user scrolled to the bottom of the passage
  useEffect(() => {
    const handleScroll = () => {
      if (passageRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = passageRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          setPassagesRead((prev) => {
            const updatedRead = [...prev];
            updatedRead[currentQuestion] = true;
            return updatedRead;
          });
        }
      }
    };

    if (passageRef.current) {
      passageRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (passageRef.current) {
        passageRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentQuestion]);

  // Handle MCQ selection
  const handleOptionChange = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = event.target.value;
    setAnswers(updatedAnswers);
  };

  // Navigate questions
  const handleNext = () => {
    if (currentQuestion < textQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit answers and generate report
  const handleSubmit = () => {
    const score = answers.reduce(
      (acc, answer, index) =>
        answer === textQuestions[index].correctAnswer ? acc + 1 : acc,
      0
    );

    const fullyReadCount = passagesRead.filter((read) => read).length;

    setResults({
      score,
      isTextLearner: fullyReadCount >= 3, // If at least 3 passages were fully read
      userAnswers: answers,
      fullyReadCount,
    });
  };

  return (
    <>
      <StickyHeader title="📄 Text Quiz" />
      <Box
        sx={{
          maxWidth: 800,
          width: "100vw",
          mx: "auto",
          mt: 4,
          p: 2,
          textAlign: "center",
        }}
      >
        {!results && (
          <Box>
            <Typography variant="h5" gutterBottom>
              📖 Question {currentQuestion + 1} of {textQuestions.length}
            </Typography>
            {/* Passage Container with Scroll Tracking */}
            <Box
              ref={passageRef}
              sx={{
                textAlign: "justify",
                p: 2,
                bgcolor: "#f5f5f5",
                borderRadius: 2,
                height: "200px",
                overflowY: "auto",
                border: "1px solid #ddd",
                position: "relative",
              }}
            >
              {textQuestions[currentQuestion].passage}
              {passagesRead[currentQuestion] && (
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontSize: "12px",
                    p: "2px 5px",
                    borderRadius: "5px",
                  }}
                >
                  ✅ Read
                </Typography>
              )}
            </Box>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              {textQuestions[currentQuestion].question}
            </Typography>

            {/* Answer Options */}
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onChange={handleOptionChange}
            >
              {textQuestions[currentQuestion].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                width: "80%",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              {currentQuestion < textQuestions.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Submit Quiz
                </Button>
              )}
            </Box>
          </Box>
        )}
        {/* Show User Report */}
        {results && (
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography variant="h4" color="primary">
              📊 User Report
            </Typography>
            <Alert severity="info" sx={{ mt: 2 }}>
              🎯 You scored {results.score} out of {textQuestions.length}!
            </Alert>

            {/* Detect Text Engagement */}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {results.isTextLearner
                ? "🎉 You are a Paragraph Learner! You engage well with written content."
                : "📚 You might prefer other learning styles."}
            </Typography>

            <Typography variant="h5" sx={{ mt: 3 }}>
              📝 Quiz Answers
            </Typography>
            {textQuestions.map((q, index) => (
              <Typography key={q.id} sx={{ mt: 1 }}>
                {index + 1}. {q.question}
                <br />
                <strong>🡆 Your Answer:</strong> {answers[index] || "No Answer"}
                <br />
                <strong>✅ Correct Answer:</strong> {q.correctAnswer}
                <br />
                <strong>📜 Passage Read:</strong>{" "}
                {results.fullyReadCount > index ? "✅ Yes" : "❌ No"}
              </Typography>
            ))}

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={() => window.location.reload()}
            >
              Restart Quiz
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TextQuizComponent;
