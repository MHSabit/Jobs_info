import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsEnum } from 'class-validator';

export class CreateJobDto {
    @IsNotEmpty()
    @IsString()
    title: string;
    

    @IsNotEmpty()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    location: string;
    
    @IsNotEmpty()
    companyName: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()   
    salary: number;
    
    @IsNotEmpty()
    tags: string[];

    @IsNotEmpty()
    @IsEnum({ values: ['full-time', 'part-time', 'contract'] })
    jobType: string;

    @IsOptional()
    experienceLevel: string;

    @IsOptional()
    @IsString()
    applyLink: string;
}