class Api::LogsController < ApplicationController
  def create
    log = Log.new(log_params)

    if log.save
      render json: log, status: :created
    else
      render json: { errors: log.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def log_params
    params.require(:log).permit(
      :message,
      :level,
      :source,
      :timestamp,
      :integration_name,
      metadata: {}
    )
  end
end