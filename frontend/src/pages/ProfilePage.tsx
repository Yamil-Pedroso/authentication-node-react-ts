import { useState } from "react";
import styled from "styled-components";
import Profile from "../components/auth/profile/Profile";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface OpacityProps {
  opacity: string;
}

// Styles
const CardWrapper = styled.div`
   display: flex;
   align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin: 10rem 3rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 60rem;
`;

const AnimatedCard = styled(Card)<OpacityProps>`
   transition: opacity 0.5s ease-in-out;
  ${(props) => `opacity: ${props.opacity || 1};`}
`;
interface CardProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=3375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tiger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Leopard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Deer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1691347833471-f6dcdf90c980?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Duck",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1691241148788-137812f43378?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lamb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1689017157798-cb119d58953c?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1472645977521-95bbf4f0a748?q=80&w=3825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Snake",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Monkey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dolphin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1628126907372-761f54441c1b?q=80&w=2447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Owl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?q=80&w=3168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elephant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Octopus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1588167056840-13caf6e4562a?q=80&w=2337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1518737743670-3f217c4def4a?q=80&w=3543&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Beatle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1517524392322-311409f24e4a?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Falcon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1563155853-f7f8955967ce?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Biever",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1632755588732-6797a85f6d4b?q=80&w=3817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Otter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Robin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fox",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1696187913125-01684fc10914?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Girafe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
];

interface CompOpacityProps {
  opacity: number;
}

const MediaCard = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [ itemOpacity, setItemOpacity ] = useState<CompOpacityProps["opacity"]>(1);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    setItemOpacity(0);
    setTimeout(() => setItemOpacity(1), 100); 
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    setItemOpacity(0);
    setTimeout(() => setItemOpacity(1), 100); 
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  return (
    <CardWrapper>
      <FaArrowLeft style={{ color: "#fff", cursor: "pointer" }}  onClick={handlePrevPage}/>
      <CardContainer>
        {currentCards.map((card, i) => (
          <AnimatedCard opacity={itemOpacity as any}
            sx={{ maxWidth: 200, maxHeight: 300 }} key={i}>
            <CardMedia
              sx={{ height: 140 }}
              image={card.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"></Button>
              <Button size="small"></Button>
            </CardActions>
          </AnimatedCard>
        ))}
      </CardContainer>
      <FaArrowRight style={{ color: "#fff", cursor: "pointer" }} onClick={handleNextPage}/>
    </CardWrapper>
  );
};

const ProfilePage = () => {
  return (
    <Container>
      <Profile />
      <MediaCard />
    </Container>
  );
};

export default ProfilePage;
