const { Model, DataTypes } = require('sequelize')

class StudentCourseStage extends Model {
    static init(connection) {
        super.init({
            year: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Nome deve conter no máximo 70 caractéres")                 
                    }
                }
            },
        }, {
            sequelize: connection,
            tableName: 'student_course_stage',
        })
    }
    static associate(models){
        this.belongsTo(models.Student, { foreignKey: 'student_number', as: 'student' }) 
        this.belongsTo(models.Course, { foreignKey: 'course_id', as: 'course' }) 
        this.belongsTo(models.Stage, { foreignKey: 'stage_id', as: 'stage' })      
    }
}

module.exports = StudentCourseStage