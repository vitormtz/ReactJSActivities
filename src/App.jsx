import React from "react";
import Counter from "./components/Counter";
import ColorChanger from "./components/ColorChanger";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import NameFilter from "./components/NameFilter";
import SignupForm from "./components/SignupForm";
import PostsList from "./components/PostsList";
import ImageGallery from "./components/ImageGallery";
import CountdownTimer from "./components/CountdownTimer";
import TabbedInterface from "./components/TabbedInterface";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Exercícios React</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Contador</h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Mudança de Cor</h2>
          <ColorChanger />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Lista de Tarefas</h2>
          <TodoList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Timer</h2>
          <Timer />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Filtro de Nomes</h2>
          <NameFilter />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Formulário de Cadastro
          </h2>
          <SignupForm />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Lista de Posts</h2>
          <PostsList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Galeria de Imagens</h2>
          <ImageGallery />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Timer Regressivo</h2>
          <CountdownTimer />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Interface com Abas
          </h2>
          <TabbedInterface />
        </section>
      </div>
    </div>
  );
};

export default App;