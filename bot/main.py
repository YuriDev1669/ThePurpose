import telebot
import mysql.connector
import time
import datetime
hora_atual = datetime.datetime.now()

bot = telebot.TeleBot('6562850386:AAGnRXn-oyVQX7_iYqvHktgE_ynh2nCaLI4')

def monitorar_banco_de_dados():
    while True:
        conexao = mysql.connector.connect(
            host="containers-us-west-156.railway.app",
            port=5819,
            user="root",
            password="mA3nzheIcymQZs0Sn34L",
            database="railway"
        )
        
        if conexao.is_connected():
            cursor = conexao.cursor()
            
            # Execute uma consulta para verificar atualizações.
            cursor.execute("SELECT id,hora,visits FROM msg WHERE status = 'pendente'")
            for (id,hora,visits) in cursor:
                # Execute a função correspondente com base no comando.
                # Atualize o status para indicar que o comando foi processado.
                cursor.execute("UPDATE msg SET status = 'enviado' WHERE id= %s", (id,))

                
            conexao.commit()
            cursor.close()
            conexao.close()
        
        # Aguarde um tempo antes de verificar novamente.
        time.sleep(1)
monitorar_banco_de_dados()

