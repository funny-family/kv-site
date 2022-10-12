## Как комитить в эту пежню.

1. Как обычно добавляем в комииты фалы, которые нужны через `git add`.
2. **НЕ ИСПОЛЬЗЕМ** команду `git commit` для создание название коммита. Заместо этого стартуем cli, которые поможет создать сообщение в определённом формате используя команду `yarn commit`.
3. Закидываем изменения в удалённый репозиторий. `git push`

## Структура коммита
 Когда запускаем `yarn commit` пропускаем вопрос "? Denote the scope of this change ($location, $browser, $compile, etc.):".

 На вопрос "? Write a short, imperative tense description of the change:" отвечаем коротко. Следующий вопрос "? Provide a longer description of the change:" нужен если которкого описания не хватило и нужно пояснение.

В вопросе "? List any breaking changes or issues closed by this change:" указываем ищюс (номер такски), которую закрываем.
