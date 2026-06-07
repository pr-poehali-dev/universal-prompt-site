import os
import json
import urllib.request

TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '')
TELEGRAM_CHAT_ID = '@GUM_GUM8'


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта в Telegram @GUM_GUM8"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')

    name = body.get('name', '—')
    phone = body.get('phone', '—')
    format_ = body.get('format', '—')
    comment = body.get('comment', '')

    format_labels = {
        'group': 'Групповое сопровождение — 6 недель (20 600 ₽)',
        'personal': 'Личное сопровождение — 6 недель (24 700 ₽)',
        'deep': 'Глубокое сопровождение — 10 недель (30 500 ₽)',
        'consult': 'Бесплатная консультация',
    }
    format_text = format_labels.get(format_, format_)

    message = (
        f"🌿 <b>Новая заявка с сайта</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📱 <b>Контакт:</b> {phone}\n"
        f"📋 <b>Формат:</b> {format_text}\n"
    )
    if comment:
        message += f"\n💬 <b>Комментарий:</b>\n{comment}"

    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = json.dumps({
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'HTML',
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    resp = urllib.request.urlopen(req)
    result = json.loads(resp.read())

    if not result.get('ok'):
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Telegram error'})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
