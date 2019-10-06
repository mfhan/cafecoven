class AddLongToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :long, :float
  end
end
