class AddPrevLongToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :prevlong, :float
  end
end
