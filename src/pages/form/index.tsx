import React, {useContext, useState} from "react";

import UserContext from "../../context/user/";
import { Container, ParentComponent, Form } from "./styles";
import ChildrenOne from "../../components/childrenOne/pages";
import ChildrenTwo from "../../components/childrenTwo";
import ChildrenThree from "../../components/childrenThree";


const FormData: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const { setState: setGlobalState } = useContext(UserContext);

    function handleSubmit() {
        setGlobalState({ name, lastName, email });
    }

    return (
        <Container>
            <ParentComponent>       
                <Form>
                    <h2>
                        Informe seus Dados
                    </h2>
                    <input 
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        onChange={(e) => setLastName(e.target.value)} />
                    <input
                        type="text"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                    <button type="button" onClick={handleSubmit}>
                        Enviar
                    </button>
                </Form>

                <h1>
                    Componente Pai
                </h1>
                <div id="children">
                    <ChildrenOne />
                    <ChildrenTwo />
                    <ChildrenThree />


                    {/* Add children 1, 2 and 3 */}
                </div>
            </ParentComponent>
        </Container>
    ) 
}

export default FormData;