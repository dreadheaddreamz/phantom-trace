class CreateLogs < ActiveRecord::Migration[8.1]
  def change
    create_table :logs do |t|
      t.text :message
      t.string :level
      t.string :source
      t.datetime :timestamp
      t.string :integration_name
      t.jsonb :metadata, default: {}

      t.timestamps
    end
  end
end
