import Action from "./action";
import Add from "./addMission";
import List from "./listMission";
import './todo.css'

const ToDoApp = () => {
    return (
        <>
            <div className='todo-background'>
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="logo-wrap">
                                <i className="fa-solid fa-circle" />
                                <a className="navbar-brand" href="/">
                                    Anywhere app
                                </a>
                            </div>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active" href="/todo">
                                            TODO
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <main>
                    <div className="todo-container">
                        <div className="title">
                            <h4>START YOUR DAY EFFICIENTLY</h4>

                            <h1 className='greeting-title'>Create your own daily routine</h1>
                        </div>

                        <div className="todo-wrap">
                            <Add />
                            <List />
                            <Action />
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
}

export default ToDoApp;