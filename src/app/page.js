"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    next: {revalidate : 1},
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className={styles.main}>
      <Link href="/cadastro" className={styles.link}>CADASTRAR</Link>
      <div className={styles.mostrar}>
        <div>
        {alunos.map(aluno => (
          <div key={aluno.id} className={styles.meucard}>
            <p className={styles.p}>Nome do aluno: {aluno.nome}</p>
            <p className={styles.p}>Curso: {aluno.curso}</p>
            <button onClick={e => e.preventDefault(remover(aluno.id))} className={styles.excluir}>REMOVER</button>
          </div>
        ))}
        </div>
      </div>
    </main>
  )
}
