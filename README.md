## usersデーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :comments
- has_many  :groups,  through:  :groups_users





 ## groupsテーブル

 |Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association 
- has_many :comments
- has_many  :users,  through:  :groups_users




## commntesテーブル

 |Column|Type|Options|
|------|----|-------|
|text|text|
|imege|binary|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group



## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user