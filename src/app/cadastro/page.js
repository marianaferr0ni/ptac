'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = () => {
        const aluno = {
            nome,
            curso,
            num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        });
    }
    return (
        <div className={styles.body}>
            <form action='' className={styles.form} onSubmit={cadastrar}>
                <div className={styles.formu}>
                    <h1 className={styles.h1}>
                        Cadastrar
                    </h1>
                    <input placeholder='INFORME O NOME DO ALUNO' nome="nome" type="text"
                        onChange={e => setNome(e.target.value)} className={styles.input}></input><br/>

                    <input placeholder='INFORME O CURSO' nome="curso" type="text"
                        onChange={e => setCurso(e.target.value)} className={styles.input}></input><br/>

                    <input placeholder='INFORME Nº DE INSCRIÇÃO' nome="num_inscricao" type="number"
                        onChange={e => setNum_inscricao(e.target.value)} className={styles.input}></input><br/>
                    <div className={styles.alinhar}>
                        <button type='submit' className={styles.botao}>CADASTRAR</button>
                        <a href='/' className={styles.voltar}>VOLTAR</a>
                    </div>
                    
                </div>
            </form>
        </div>

    );

}